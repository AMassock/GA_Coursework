from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.BookList.as_view(), name='book_list'),
    path('books/', views.BookList.as_view(), name='book_list'),
    path('book/<int:pk>', views.BookDetail.as_view(), name='book_detail'),
    path('authors/', views.AuthorList.as_view(), name='author_list'),
    path('author/<int:pk>', views.AuthorDetail.as_view(), name='author_detail'),
    path('genres/', views.GenreList.as_view(), name='genre_list'),
    path('genre/<int:pk>', views.GenreDetail.as_view(), name='genre_detail'),
]
