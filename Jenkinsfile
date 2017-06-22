node {
    env.NODE_ENV = "test"

    print "Environment will be : ${env.NODE_ENV}"

  stage ('Checkout') {
    git 'https://github.com/DQing/jenkins-project-demo'
  }

  stage ('Create Virtualenv') {
    sh '${nvmSource}node -v'
  }

  stage ('Install') {
    sh '${nvmSource}npm i'
  }

  stage ('Unit Test') {
    sh '${nvmSource}webpack'
  }

  stage ('E2E Test') {
    sh '${nvmSource}npm test'
  }

  stage ('Deploy') {
    sh '${nvmSource}npm start'
  }
}