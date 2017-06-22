node {

  stage ('Checkout') {
    git 'https://github.com/DQing/jenkins-project-demo'
  }

  stage ('Create Virtualenv') {
    sh 'node -v'
  }

  stage ('Install') {
    sh 'npm i'
  }

  stage ('Unit Test') {
    sh 'webpack'
  }

  stage ('E2E Test') {
    sh 'npm test'
  }

  stage ('Deploy') {
    sh 'npm start'
  }
}