import { Vercel } from '@vercel/sdk';
import fs from 'fs';
import path from 'path';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN || '',
});

async function deploy() {
  try {
    // 1. Create a new project
    console.log('Creating project...');
    const project = await vercel.projects.createProject({
      requestBody: {
        name: 'azerbaijan-travel-platform',
        framework: 'nextjs',
        gitRepository: {
          type: 'github',
          repo: 'your-username/azerbaijan-travel-platform', // Replace with actual repo
        },
      },
    });
    console.log('Project created:', project.id);

    // 2. Create deployment
    console.log('Creating deployment...');
    const deployment = await vercel.deployments.createDeployment({
      requestBody: {
        name: 'azerbaijan-travel-platform',
        project: project.id,
        target: 'production',
        build: {
          env: {
            NEXT_PUBLIC_VERCEL_URL: 'localhost:3000',
          },
        },
      },
    });
    console.log('Deployment created:', deployment.url);

  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deploy();