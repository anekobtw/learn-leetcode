# Array

Arrays are one of the most important things to understand. They let you store multiple items in **one variable**. In Python, arrays are usually called **lists**. Python lists are **dynamic arrays**. Python also has a real `array` module, but lists are far more common for beginners.

---



## 1. What is an Array (List)?

An array is like a list of items. Each item can be an integer, a string, or even another list.  

```python
# Example of a list
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
```

Here, `numbers` holds integers and `fruits` holds strings.



## 2. Accessing Items

You can access items by their **index**. In programming, we start counting at **0**.

```python
numbers = [1, 2, 3, 4, 5]

print(numbers[0])  # 1
print(numbers[2])  # 3
print(numbers[-1]) # 5 (last item)
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[3:])   # [4, 5]
```



## 3. Changing Items

Since arrays in python are **mutable**, you can **change any item** by accessing its index.

```python
fruits = ["apple", "banana", "cherry"]
fruits[1] = "orange"
print(fruits)  # ["apple", "orange", "cherry"]
```



## 4. Adding Items

- **Append**: Adds at the end
- **Insert**: Adds at a specific position

```python
fruits = ["apple", "banana"]
fruits.append("cherry")  # -> ["apple", "banana", "cherry"]
fruits.insert(1, "orange")  # -> ["apple", "orange", "banana", "cherry"]

numbers = [1, 2]
numbers.extend([3, 4])
print(numbers)  # [1, 2, 3, 4]
```



## 5. Removing Items

```python
fruits = ["apple", "orange", "banana", "cherry", "mango", "peach"]
fruits.remove("orange")  # Remove by value -> ["apple", "banana", "cherry", "mango", "peach"]
fruits.pop()  # Remove the last item -> ["apple", "banana", "cherry", "mango"]
fruits.pop(1)  # Remove by index -> ["apple", "cherry", "mango"]
fruits.clear()  # Clear everything -> []
```



## 6. Looping Through a List

You can loop through each item easily:

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

for i, fruit in enumerate(fruits):
    print(i, fruit)
```



## 7. Other Useful Tricks

```py
numbers = [1, 2, 3, 4, 5]
```

- **List comprehension**:

```python
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

- **Joining strings** from a list:

```python
fruits = ["apple", "banana"]
print(", ".join(fruits))  # "apple, banana"
```

- Copying a list

  ```python
  a = [1,2,3]
  b = a  # b points to the same list
  b.append(4)
  print(a)  # [1,2,3,4] <-- might surprise newbies
  b = a.copy()  # now independent
  ```

- **Useful built-in functions**
- `min()`, `max()`, `sum()`

```python
numbers = [5,3,2,4,1]
print(len(numbers))  # 5
print(sum(numbers))  # 15
print(max(numbers))  # 5
print(min(numbers))  # 1
numbers.sort()
print(numbers)  # [1, 2, 3, 4, 5]
print(list(reversed(numbers)))  # [5, 4, 3, 2, 1]
print(3 in numbers)  # True
print(8 in numbers)  # False


# Alternative reverse:
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]
```
