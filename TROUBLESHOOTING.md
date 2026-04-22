# 🔧 BACKEND HOSTING TROUBLESHOOTING GUIDE

## Quick Start (Local Testing)

```bash
# 1. Install dependencies
npm install

# 2. Run diagnostic test
npm run diagnose

# 3. Start the server
npm start
```

---

## ✅ COMMON ISSUES & SOLUTIONS

### Issue 1: "ERR_MODULE_NOT_FOUND: Cannot find module" 

**Causes:**
- Duplicate `src/src/` in import paths
- Wrong relative path imports
- File not uploaded to hosting

**Solutions:**
```javascript
// ✅ CORRECT - Use relative paths
import mailConfig from "../config/mailConfig.js";

// ❌ WRONG - Don't use absolute paths
import mailConfig from "/src/config/mailConfig.js";
```

**For Hosting (Render/Vercel/Railway):**
- Deploy the folder contents, NOT the folder itself
- Directory structure should be:
  ```
  app.js
  package.json
  src/
  .env
  ```

---

### Issue 2: "MONGO_URL is not defined" 

**Cause:** Missing environment variables on hosting

**Solution - Render:**
1. Go to Dashboard → Select your service
2. Click "Environment"
3. Add these variables:
   ```
   MONGO_URL = your_mongodb_url
   PORT = 8000
   JWT_SECRET = your_secret
   MAIL_HOST = smtp.gmail.com
   MAIL_PORT = 465
   MAIL_SECURE = true
   MAIL_USER = your_email@gmail.com
   MAIL_PASS = your_app_password
   ```

---

### Issue 3: "Cannot find module ... from Services"

**Cause:** Path traversal issues in imports

**Check:** All files in `src/services/` should use **relative paths**

```javascript
// ✅ CORRECT
import mailConfig from "../Config/mailConfig.js";

// ❌ WRONG
import mailConfig from "src/Config/mailConfig.js";
import mailConfig from "/src/Config/mailConfig.js";
```

---

### Issue 4: "Port already in use"

**Solution:**
```bash
# Check what's using the port (Windows)
netstat -ano | findstr :8000

# Kill the process
taskkill /PID <PID> /F
```

---

### Issue 5: Email sending not working

**For Gmail:**
1. Enable 2-Factor Authentication
2. Create an **App Password** (not regular password)
3. Use App Password in `.env`:
   ```
   MAIL_PASS="your_app_password"  # Example: "abcd efgh ijkl mnop"
   ```

---

## 🧪 TEST YOUR BACKEND

### Local Testing:
```bash
# 1. Test diagnostic
npm run diagnose

# 2. Start server
npm start

# 3. Open browser
http://localhost:8000/

# 4. Should see:
{
  "message": "Backend Server is Running ✅",
  "status": "success"
}
```

### Test Endpoints:
```bash
# User registration
curl -X POST http://localhost:8000/user/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"123456"}'

# Get orders
curl http://localhost:8000/order/getAllOrder

# Health check
curl http://localhost:8000/
```

---

## 📤 DEPLOYMENT CHECKLIST

Before deploying to Render/Vercel/Railway:

- [ ] Run `npm run diagnose` - all checks pass ✅
- [ ] Test locally: `npm start` works ✅
- [ ] `.env` file exists with all variables ✅
- [ ] MongoDB URL is valid ✅
- [ ] package.json has `"start": "node app.js"` ✅
- [ ] No hardcoded paths (use relative paths) ✅
- [ ] All dependencies in package.json ✅

---

## 🚀 DEPLOYMENT ON RENDER

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Fix backend issues"
   git push
   ```

2. **Create New Service on Render**
   - Select "Web Service"
   - Connect GitHub repo
   - Branch: main

3. **Build Command**
   ```bash
   npm install
   ```

4. **Start Command**
   ```bash
   npm start
   ```

5. **Environment Variables**
   - Add all variables from `.env`
   - Don't expose `.env` file

6. **Deploy**
   - Click "Deploy"
   - Check logs for errors

---

## 📊 VERIFY DEPLOYMENT

After deploying:

```bash
# Test health endpoint
curl https://your-app.onrender.com/

# Should return:
{
  "message": "Backend Server is Running ✅",
  "status": "success"
}
```

---

## 🆘 GET LOGS

**Render:**
- Dashboard → Your Service → Logs

**Local:**
```bash
npm start  # See all console logs
```

---

## 📞 SUPPORT

If issues persist:
1. Run: `npm run diagnose`
2. Check logs in hosting platform
3. Verify `.env` variables match locally and on hosting
4. Ensure all files are uploaded
5. Check that Node version is compatible (v14+)

