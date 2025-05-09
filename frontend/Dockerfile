# Dockerfile cho React
FROM node:16

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file package.json và package-lock.json vào container
COPY package.json package-lock.json ./

# Cài đặt các phụ thuộc React
RUN npm install

# Sao chép toàn bộ mã nguồn React vào container
COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]
