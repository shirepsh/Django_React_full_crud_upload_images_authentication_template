from rest_framework import serializers
from .models import  *

#product model serializers
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("__all__")

    def create(self, validated_data):
        user = self.context['user']
        print(user)
        return Product.objects.create(**validated_data, user=user)

