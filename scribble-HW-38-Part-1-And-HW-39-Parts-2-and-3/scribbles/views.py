from django.shortcuts import render, redirect
from .models import Post, Comment
from .forms import NewPost, NewComment

# Create your views here.
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'posts/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = Post.objects.get(id=pk)
    comments = Comment.objects.filter(post=pk)
    return render(request, 'posts/post_detail.html', {'post': post, 'comments': comments})

def post_new(request):
    if request.method == 'POST':
        form = NewPost(request.POST)
        if form.is_valid():
            post = form.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = NewPost()
        
    return render(request, 'posts/post_new.html', {'form': form})

def post_edit(request, pk):
    post = Post.objects.get(id=pk)
    if request.method == 'POST':
        form = NewPost(request.POST, instance=post)
        if form.is_valid():
            post = form.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = NewPost(instance=post)

    return render(request, 'posts/post_new.html', {'form': form})

def post_delete(request, pk):
    Post.objects.get(id=pk).delete()
    return redirect('post_list')

def new_comment(request):
    if request.method == 'POST':
        form = NewComment(request.POST)
        if form.is_valid():
            comment = form.save()
            return redirect('post_detail', pk=comment.post_id)
    else:
        form = NewComment()

    return render(request, 'new_comment.html', {'form': form})

def comment_edit(request, pk):
    post = Comment.objects.get(id=pk)
    if request.method == 'POST':
        form = NewComment(request.POST, instance=post)
        if form.is_valid():
            post = form.save()
            return redirect('post_detail', pk=post.post_id)
    else:
        form = NewComment(instance=post)

    return render(request, 'posts/post_new.html', {'form': form})

def comment_delete(request, pk):
    Comment.objects.get(id=pk).delete()
    return redirect('post_list') 