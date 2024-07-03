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

    
}