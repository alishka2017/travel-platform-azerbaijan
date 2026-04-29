import { Vercel } from '@vercel/sdk';
import fs from 'fs';
import path from 'path';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN || '',
});

async function deploy() {
  try {
    console.log('Creating deployment...');
    
    // Create deployment
    const deployment = await vercel.deployments.createDeployment({
      requestBody: {
        name: 'azerbaijan-travel-platform',
        project: 'prj_wlwK1yKAaNZUaVJOrD8sPHMXERDA',
        target: 'production',
        gitSource: {
          type: 'github',
          repoId: 'alishka2017/azerbaijan-travel-platform',
          ref: 'main'
        },
        env: {
          NEXT_PUBLIC_VERCEL_URL: 'localhost:3000'
        }
      },
    });
    
    console.log('Deployment created:', deployment.url);
    console.log('Deployment ID:', deployment.id);

  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deploy();
