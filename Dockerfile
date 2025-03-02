# Użyj nowszej wersji Node.js jako obrazu bazowego
FROM node:20.17.0-alpine

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj package.json i package-lock.json do katalogu roboczego
# Skopiuj resztę kodu aplikacji
COPY . .

# Zainstaluj zależności
RUN npm install --force


# Zbuduj aplikację Next.js
RUN npm run build

# Udostępnij port, na którym będzie działać aplikacja
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "run", "start"]