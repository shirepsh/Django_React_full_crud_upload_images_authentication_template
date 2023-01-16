from django.urls import path
from . import views
from . import views

urlpatterns = [
    path('', views.home),
    path('product',views.APIViews.as_view()),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.register),

]


