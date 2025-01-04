FROM node:21

WORKDIR /myapp

#COPY copy_from_location copy_to_location (. . mean all file from the folder)
COPY . . 

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
