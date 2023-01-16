from django.db import models
from django.contrib.auth.models import User

# create the product model
class Product(models.Model):
    user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    id = models.BigAutoField(primary_key=True)
    desc = models.CharField(max_length=16, null=False, blank=False)
    price = models.IntegerField(null=True, blank=True)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')

    def __str__(self):
        return self.desc
