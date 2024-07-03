pipeline {
    agent any

    tools {
        nodejs 'NodeJS14'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test -- --reporters=jest-junit'  // Générer les rapports de tests en format JUnit
            }
        }
    }

    post {
        always {
            junit 'path/to/test-results.xml'  // Assurez-vous que le chemin correspond à l'emplacement des résultats
            archiveArtifacts artifacts: 'path/to/artifacts/*', fingerprint: true
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
    }
}