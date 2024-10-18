pipeline {
    agent { label "agent-1" }

    stages {
        stage("code") { 
            steps { 
                echo "This is cloning the code"
                git branch: 'main', url: 'https://github.com/Dhananjaykul/my-counter-app.git'
            }
        }

        stage("build") { 
            steps { 
                echo "This is Building the code"
                sh "docker build -t my-counter-app:latest ."
            }
        }

        stage("Push to DockerHub") { 
            steps { 
                echo "Pushing the image to DockerHub"
                withCredentials([usernamePassword(
                    credentialsId: "DockerHubCredentials",
                    passwordVariable: "dockerHubPass",
                    usernameVariable: "dockerHubUser"
                )]) {
                    sh "docker login -u ${dockerHubUser} -p ${dockerHubPass}"
                    sh "docker image tag my-counter-app:latest ${dockerHubUser}/my-counter-app:latest"
                    sh "docker push ${dockerHubUser}/my-counter-app:latest"
                }
            }
        }

        stage("test") { 
            steps { 
                echo "This is testing the code"
            }
        }

        stage("deploy") { 
            steps { 
                echo "This is deploying the code"
                sh "docker compose up -d"
            }
        }
    }
}
