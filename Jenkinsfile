pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository from GitHub
                git 'https://github.com/username/repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run the tests
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Run the build process
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Build and Tests completed successfully.'
        }
        failure {
            echo 'Build or Tests failed.'
        }
    }
}