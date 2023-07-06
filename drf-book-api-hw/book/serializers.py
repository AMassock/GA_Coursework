from rest_framework import serializers
from .models import Author, Genre, Book

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.HyperlinkedRelatedField(
        view_name='author_detail',
        many=True,
        read_only=True
    )

    author_url = serializers.ModelSerializer.serializer_url_field(
        view_name='author_detail'
    )

    class Meta:
        model = Author
        fields = ('name', 'author_url', 'dob', 'bio', 'nationality', 'author', )

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    genre = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        many=True,
        read_only=True
    )

    genre_url = serializers.ModelSerializer.serializer_url_field(
        view_name='genre_detail'
    )
    class Meta:
        model = Genre
        fields = ('name', 'desc', 'genre', 'genre_url',)

class BookSerializer(serializers.HyperlinkedModelSerializer):
    book = serializers.HyperlinkedRelatedField(
        view_name='book_detail',
        many=True,
        read_only=True
    )

    book_url = serializers.ModelSerializer.serializer_url_field(
        view_name='book_detail'
    )

    class Meta:
        model = Book
        fields = ('title', 'book_url', 'isbn', 'publisher', 'date', 'desc', 'cov_img', 'book', 'author', 'genre')