
import requests

APIKEY = "ed995ad3fe8b75790495c98ebe436272"
url = "https://api.weatherstack.com/current?access_key={APIKEY}"


#Aqui podemos pasar la ubicacion de lotitud y etc

querystring = {"query":"40.7831,-73.9712"}
#Usaremos esta para ingresar la ciudad y obtener datos de la otra api

querystring = {"query":"New Delhi"}

response = requests.get(url, params=querystring)

print(response.json())