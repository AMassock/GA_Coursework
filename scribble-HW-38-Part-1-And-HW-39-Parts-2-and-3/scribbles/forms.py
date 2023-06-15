from django import forms
from .models import Post, Comment

class NewPost(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('author', 'title', 'body')


class NewComment(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('post', 'author', 'body') 