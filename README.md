# EB Training

A Node.js project for practicing AWS Elastic Beanstalk deployment and CI/CD pipelines.

## Overview

This project serves as a learning environment to understand and implement:
- **AWS Elastic Beanstalk** - containerized application deployment and scaling
- **CI/CD Pipelines** - automated testing, building, and deployment workflows
- **Infrastructure as Code** - environment configuration and management

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- AWS account with Elastic Beanstalk access
- AWS CLI configured with appropriate credentials
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eb-training
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:
   ```bash
   cp .env.example .env
   ```

## Development

Start the development server:
```bash
npm start
```

The application will run on `http://localhost:3000` (or the port specified in your environment).

## Elastic Beanstalk Setup

### Initialize EB Environment

```bash
eb init -p "Node.js 16 running on 64bit Amazon Linux 2" eb-training
```

### Create Environment

```bash
eb create eb-training-env
```

### Deploy to Elastic Beanstalk

```bash
eb deploy
```

### Monitor Deployment

```bash
eb status
eb logs
```

### Access Application

```bash
eb open
```

## CI/CD Pipeline

This project is configured for continuous integration and continuous deployment. The pipeline includes:

- **Testing**: Automated test execution on pull requests
- **Building**: Creating optimized production builds
- **Deployment**: Automated deployment to Elastic Beanstalk on main branch commits

### Pipeline Configuration

CI/CD configuration files are located in:
- `.github/workflows/` (GitHub Actions)
- `.elasticbeanstalk/` (Elastic Beanstalk configuration)

## Project Structure

```
eb-training/
├── index.js              # Application entry point
├── package.json          # Project metadata and dependencies
├── .gitignore            # Git ignore rules
├── .elasticbeanstalk/    # EB configuration
└── README.md             # This file
```

## Environment Variables

Configure the following environment variables in your `.env` file:

- `NODE_ENV` - Environment mode (development/production)
- `PORT` - Server port (default: 3000)

## Troubleshooting

### EB CLI Not Found
Install AWS Elastic Beanstalk CLI:
```bash
pip install awsebcli
```

### Deployment Issues
Check logs:
```bash
eb logs --stream
```

## Resources

- [AWS Elastic Beanstalk Documentation](https://docs.aws.amazon.com/elasticbeanstalk/)
- [EB CLI Documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html)
- [Node.js on Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-nodejs.html)

## License

MIT
