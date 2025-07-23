# Node.js 18 Alpine image kullan
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# Bun kurulumu için gerekli paketleri yükle
RUN apk add --no-cache curl unzip bash

# Bun'u kur
RUN curl -fsSL https://bun.sh/install | bash

# PATH'e bun'u ekle
ENV PATH="/root/.bun/bin:${PATH}"

# Package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./
COPY bun.lockb ./

# Bağımlılıkları yükle
RUN bun install

# Tüm proje dosyalarını kopyala
COPY . .

# Expo export yap
RUN bun run build

# Port 8081'i expose et
EXPOSE 8081

# Expo serve komutunu çalıştır
CMD ["bun", "run", "serve", "--port", "8081"] 