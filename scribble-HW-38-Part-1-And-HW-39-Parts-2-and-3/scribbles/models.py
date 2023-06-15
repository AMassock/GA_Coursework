from django.db import models

# Create your models here.
'''
A Post should have the following fields:

author (CharField)
title (CharField)
body (CharField)

A Comment should have the following fields:

author (CharField)
body (CharField)
post (ForeignKey for Post)
'''

class Post(models.Model):
    author = models.CharField(max_length=80)
    title = models.CharField(max_length=120)
    body = models.TextField()

    def __str__(self):
        return f"{self.title} by {self.author}"
    
class Comment(models.Model):
    author = models.CharField(max_length=80)
    body = models.CharField(max_length=80)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return f'{self.author} replying to {self.post.author}'