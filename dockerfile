FROM node:18 AS builder

WORKDIR /app

# Copy package files to simplify future builds
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Step 2: Use a clean image to serve the built app
FROM node:18 AS runner

WORKDIR /app

# Only copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose Next.js default port
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]