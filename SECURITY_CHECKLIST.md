# Security Checklist for GitHub Repository

## Before Deployment

### 1. Repository Visibility

**CRITICAL**: Ensure the repository is **Private**:

1. Go to GitHub repository Settings
2. Navigate to **Danger Zone** → **Change repository visibility**
3. Set to **Private**
4. Only grant access to authorized users

### 2. Environment Variables

**Never commit API tokens or secrets to the repository.**

Check for exposed tokens in:
- `.env.local`
- `.env.production`
- Configuration files
- Code comments

### 3. GitHub Actions

Review GitHub Actions workflows:
- Check `.github/workflows/` for any exposed secrets
- Ensure workflows don't log sensitive information

### 4. Dependency Security

Run security audit:
```bash
npm audit
```

Fix any critical vulnerabilities before deployment.

### 5. Netlify Environment Variables

In Netlify dashboard:
1. Go to Site Settings → Environment
2. Verify all required variables are set:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_TOKEN`
3. Ensure tokens are encrypted

### 6. Security Headers

The application should implement:
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Post-Deployment

### 1. Test Public Access

Verify the repository is not publicly accessible:
- Try accessing via incognito browser
- Verify unauthorized users cannot view code

### 2. Monitor for Leaks

Use GitHub's secret scanning:
- Enable in repository settings
- Monitor for any accidental commits

### 3. Regular Security Reviews

Schedule regular security audits:
- Monthly dependency updates
- Quarterly security reviews
- Annual penetration testing

## Emergency Response

If a token is accidentally committed:

1. **Immediately** rotate the token
2. Remove the commit from history:
   ```bash
   git reset --hard HEAD~1
   git push --force
   ```
3. Update any affected services
4. Review access logs for suspicious activity

## Contacts

For security concerns:
- Email: security@smartholiday.az
- WhatsApp: +994501234567
