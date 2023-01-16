from django.contrib import admin
from .models import Product

# connect between the table to the admin
admin.site.register(Product)


