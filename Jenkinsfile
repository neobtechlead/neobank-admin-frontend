/**
* Jenkins Pipepline Script for deploying NEOBANK-ADMIN-FRONTEND to Kubernetes Cluster
* @Author Peter Yefi
* @Created June 9 2020
**/

node {
    def app
    try {

        if (env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'main' || env.BRANCH_NAME.startsWith('PR-')) {
        stage('Clone repository') {
            /* Let's make sure we have the repository cloned to our workspace */

            checkout scm
            //Copy .env file from workspace to project

            sh 'cp ../cf_neobank_admin_frontend.env .'
            sh 'mv cf_neobank_admin_frontend.env  .env.local'

            if(env.BRANCH_NAME == 'develop'){
                
                withCredentials([
                    string(credentialsId: 'admin-api-base-url-staging', variable: 'API_BASE_URL')
                ]) {
                     sh ('sed -i "s|ADMIN_URL|${API_BASE_URL}|" .env.local')
                }

            } else if(env.BRANCH_NAME == 'main') {
            
                 withCredentials([
                    string(credentialsId: 'admin-api-base-url-prod', variable: 'API_BASE_URL')
                ]) {
                    sh ('sed -i "s|ADMIN_URL|${API_BASE_URL}|" .env.local')
                }
            }
       
        }

        stage('Build image') {
            /**
            * Choose deployment environment variable for run command in dockerfile
            * based on branch triggering the build process
            */
            lock('Environment Tagging'){
                
                /* This builds the actual image; synonymous to
                * docker build on the command line */
                
                withCredentials([string(credentialsId: 'neobank-ecr-repo', variable: 'NEOBANK_ECR_REPO')]) {
                    app = docker.build(
                        "${NEOBANK_ECR_REPO}", 
                        "--build-arg NEOBANK_SONARQUBE_ANALYSIS=${NEOBANK_SONARQUBE_ANALYSIS} .")
                    
                }
                
            }   
        }
        
        stage('SonarQube Analysis') {
            withSonarQubeEnv('Sonarqube') {
                withCredentials([string(credentialsId: 'transact-admin-frontend-sonar-token', variable: 'SONAR_TOKEN')]) {
                sh "sonar-scanner \
                    -Dsonar.projectKey=cf-neobank-admin-frontend \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=${env.SONARQUBE_URL} \
                    -Dsonar.login=\"\$SONAR_TOKEN\""
                }    
            }
        }

        stage('Quality Gateway') {
            timeout(time: 1, unit: 'HOURS') {
                def qualityGate = waitForQualityGate()
                if (qualityGate.status != 'OK') {
                    error "Pipeline aborted due to quality gate failure: ${qualityGate.status}"
                }
            }
        }

        
            stage('Push image') {
                /* Finally, we'll push the image with tag of the current build number
                * Pushing multiple tags is cheap, as all the layers are reused.
                 */
                lock("ImagePush"){

                    withCredentials([
                        string(credentialsId: 'neobank-registry', variable: 'NEOBANK_REGISTRY'), 
                        string(credentialsId: 'neobank-registry-url', variable: 'NEOBANK_REGISTRY_URL'),
                        string(credentialsId: 'neobank-ecr-repo-cred', variable: 'NEOBANK_ECR_REPO_CRED')
                    ]) {
                           def tag = ''
                            if (env.BRANCH_NAME == 'main'){
                                tag = 'cf-neobank-admin-frontend-prod-latest'
                                sh ('sed -i "s|IMAGE_TAG|cf-neobank-admin-frontend-prod-latest|" src/cf-helm/values.yaml')
                            } else if (env.BRANCH_NAME == 'develop'|| env.BRANCH_NAME ==~ /^PR-.*/){
                                tag = 'cf-neobank-admin-frontend-staging-latest'
                                sh ('sed -i "s|IMAGE_TAG|cf-neobank-admin-frontend-staging-latest|" src/cf-helm/values.yaml')
                            }
                            sh ('sed -i "s|CON_REGISTRY|${NEOBANK_REGISTRY}|" src/cf-helm/values.yaml')
                
                    
                            docker.withRegistry("${NEOBANK_REGISTRY_URL}", "${NEOBANK_ECR_REPO_CRED}") {
                                app.push(tag)
                            }
                    
                    }
                }
                
            }
            def deploy_title = ''
            def ns = ''
            def url = ''
            
            switch(env.BRANCH_NAME) {
                case ~/^PR-.*|^develop$/:
                    deploy_title = 'Staging'
                    ns = 'staging'
                    url = "https://neobank-admin-staging.completefarmer.com" 
                break
                case 'main':
                    deploy_title = 'Production'
                    ns = 'production'
                    url = "https://neobank-admin.completefarmer.com"
                break
            }

            stage("Deploy To ${deploy_title} Environment") {
                /**
                * Deploy to production or staging environment when the job is 
                * triggered by either master of dev branch
                */
                withCredentials([string(credentialsId: 'neobank-context', variable: 'NEOBANK_CONTEXT')]) {
               
                    sh 'kubectl config use-context ${NEOBANK_CONTEXT}'
                    sh 'helm lint ./src/cf-helm/'
                    sh "helm upgrade --install --wait --timeout 360s --force cf-neobank-admin-frontend src/cf-helm -n=${ns}"
                    slackSend(color: 'good', message: "Successfully deployed Neobank admin Frontend at ${url}")
                    office365ConnectorSend webhookUrl: "${env.TEAM_WEBHOOK}", status: 'Success', message: "Neobank admin Frontend deployed at ${url}"
                    
                }
            }
        }
    } catch(err){
        slackSend(color: '#F01717', message: "${err}")
        office365ConnectorSend webhookUrl: "${env.TEAM_WEBHOOK}", message: "${err}"
        error "Build Failed ${err}"

    } finally {
        if (env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'main'){
                def envName = env.BRANCH_NAME == 'dev' ? 'staging' : 'production'
                if (currentBuild.currentResult == 'SUCCESS'){
                    jiraSendDeploymentInfo environmentId: "${envName}", environmentName: "${envName}", environmentType: "${envName}", state: "successful"
                }
            }
            //Remove dangling images
            sh 'docker system prune -f'
    }
    
    
    
}
