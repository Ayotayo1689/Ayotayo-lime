
FROM node:20-alpine as build

# ARGS
ARG VITE_APP_URL
# ARG APIM_KEY
# ARG REACT_APP_PAYSTACK_PUBLIC_KEY


WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# ENV REACT_APP_URL=$REACT_APP_URL 
# ENV REACT_APP_Ocp_Apim_Subscription_Key=$APIM_KEY
# ENV REACT_APP_PAYSTACK_PUBLIC_KEY=$REACT_APP_PAYSTACK_PUBLIC_KEY
ENV GENERATE_SOURCEMAP=false

COPY package.*json ./

# RUN npm install -g npm@9.4.1

RUN npm install --force
# --legacy-peer-deps

COPY . ./

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
