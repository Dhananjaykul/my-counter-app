@Library("shared") _
pipeline {
    agent { label "agent-1" }

    stages {
        stage("Hello") {
            steps {
                script {
                    hello() // Calls the hello.groovy script from the shared library
                }
            }
        }
        stage("code") { 
            steps { 
                clone("https://github.com/Dhananjaykul/my-counter-app.git", "main")
            }
        }

        stage("build") { 
            steps { 
                echo "This is Building the code"
                docker_build("my-counter-app", "latest", "dhananjaykulkarni")
            }
        }

        stage("Push to DockerHub") { 
            steps { 
               script {
                   docker_push("my-counter-app", "latest", "dhananjaykulkarni")
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
