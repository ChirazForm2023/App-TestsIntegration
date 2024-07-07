pipeline {
    agent any

    tools {
        nodejs 'NodeJS14'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'  // Générer les rapports de tests en format JUnit
            }
        }
    }

    /*post {
        always {
            junit 'C:\\Users\\Chira\\Formations\\Result\\test-results.xml'  // Assurez-vous que le chemin correspond à l'emplacement des résultats
            archiveArtifacts artifacts: 'C:\\Users\\Chira\\Formations\\Result\\*', fingerprint: true
        }
        success {
            emailext subject: "Build Successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                     body: "Good job! The build ${env.BUILD_NUMBER} was successful.",
                     recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
        failure {
            emailext subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                     body: "Oh no! The build ${env.BUILD_NUMBER} failed. Please check the logs for details.",
                     recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }*/
}