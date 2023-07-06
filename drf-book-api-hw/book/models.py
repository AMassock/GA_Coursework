from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=120)
    dob = models.DateField()
    bio = models.TextField()
    nationality = models.CharField(max_length=240)

    def __str__(self):
        return self.name
    
class Genre(models.Model):
    name = models.CharField(max_length=120)
    desc = models.TextField()

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=120)
    isbn = models.CharField(max_length=240)
    publisher = models.CharField(max_length=240)
    date = models.DateField()
    desc = models.TextField()
    cov_img = models.CharField(max_length=120)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='authors')
    genre = models.ManyToManyField(Genre)

    def __str__(self):
        return self.title
    