from django.shortcuts import render, redirect
from .models import House, Student
from .forms import HouseForm, StudentForm


def house_list(request):
    houses = House.objects.all()
    return render(request, 'house_list.html', {'houses': houses})

def house_detail(request, pk):
    house = House.objects.get(id = pk)
    return render(request, 'house_detail.html', {'house': house})

def house_create(request):
    if request.method == 'POST':
        form = HouseForm(request.POST)
        if form.is_valid:
            house = form.save()
            return redirect('house_detail', pk = house.pk)
    else:
        form = HouseForm()
        return render(request, 'house_form.html', {'form': form})

def house_update(request, pk):
    house = House.objects.get(id = pk)
    if request.method == 'POST':
        form = HouseForm(request.POST, instance = house)
        if form.is_valid:
            house = form.save()
            return redirect('house_detail', pk = house.pk)
    else:
        form = HouseForm(instance = house)
        return render(request, 'house_form.html', {'form': form})

def house_delete(request, pk):
    if request.method == 'POST':
        House.objects.get(id = pk).delete()
    return redirect('house_list')

def student_list(request):
    students = Student.objects.all()
    return render(request, 'student_list.html', {'students': students})

def student_detail(request, pk):
    student = Student.objects.get(id = pk)
    return render(request, 'student_detail.html', {'student': student})

def student_create(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid:
            student = form.save()
            return redirect('student_detail', pk = student.pk)
    else:
        form = StudentForm()
        return render(request, 'student_form.html', {'form': form})

def student_update(request, pk):
    student = Student.objects.get(id = pk)
    if request.method == 'POST':
        form = StudentForm(request.POST, instance = student)
        if form.is_valid:
            student = form.save()
            return redirect('student_detail', pk = student.pk)
    else:
        form = StudentForm(instance = student)
        return render(request, 'student_form.html', {'form': form})

def student_delete(request, pk):
    if request.method == 'POST':
        Student.objects.get(id = pk).delete()
    return redirect('student_list')
