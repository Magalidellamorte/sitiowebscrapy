# syntax=docker/dockerfile:1.7-labs

# ---- Base builder image ----
FROM node:20-alpine AS base
WORKDIR /app

# Install OS deps only if needed (none required for this project)

# ---- Dependencies layer (cacheable) ----
FROM base AS deps
RUN corepack enable && corepack prepare npm@10.8.2 --activate
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund --legacy-peer-deps

# ---- Build layer ----
FROM deps AS build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Runtime (minimal) ----
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only the standalone server and public assets
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Port
EXPOSE 3000

# Default command
CMD ["node", "server.js"]


