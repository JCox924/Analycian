# syntax=docker/dockerfile:1

# Base image: Python and Node for static assets (no build step)
FROM python:3.10-slim AS base

# Disable Python output buffering and set Django settings module
ENV PYTHONUNBUFFERED=1 \
    DJANGO_SETTINGS_MODULE=core.settings

WORKDIR /app

# Install backend dependencies
COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend source code
COPY backend/ ./backend/

# Prepare Django template and static directories
RUN mkdir -p /app/backend/core/templates
RUN mkdir -p /app/backend/core/static/js

# Copy frontend template and pre-built JS
COPY index.html /app/backend/core/templates/
COPY static/js/ /app/backend/core/static/js/

WORKDIR /app/backend/core

# Collect static files into STATIC_ROOT
RUN python manage.py collectstatic --noinput

# Expose the application port
EXPOSE 8000

# Start Gunicorn
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
# This is my Dockerfile