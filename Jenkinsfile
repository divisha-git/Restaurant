pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Jenkins will automatically checkout the code from the Git repository
                echo 'Checking out code from Git...'
                checkout scm
            }
        }

        stage('Static Analysis') {
            steps {
                // Optional: Run linting or static checks (e.g., HTML/CSS linting)
                echo 'Running static analysis (HTML/CSS linting)...'
            }
        }

        stage('Build') {
            steps {
                // For a static site, this stage could be used for minification or bundling
                echo 'Building the static website...'
            }
        }

        stage('Deploy') {
            steps {
                // Deployment steps: copy files to the web server's directory
                // Replace '/var/www/html' with your actual server path
                echo 'Deploying to web server...'
                // Example for a Linux server:
                // sh 'cp -r * /var/www/html/'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed. Please check the logs.'
        }
    }
}
