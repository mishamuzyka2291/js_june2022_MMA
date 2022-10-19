
text = str(input("ВВЕДІТЬ ТЕКСТ: "))
arrayNoSplit = text.replace(',', '').replace('.', '')
array = arrayNoSplit.split(' ')
print(array, '\n')

topOne = max(array, key=len)

withoutTopOne = arrayNoSplit.replace(topOne, '')
array1 = withoutTopOne.split(' ')
topTwo = max(array1, key=len)

withoutTopTwo = withoutTopOne.replace(topTwo, '')
array2 = withoutTopTwo.split(' ')
topThree = max(array2, key=len)

withoutTopThree = withoutTopTwo.replace(topThree, '')
array3 = withoutTopThree.split(' ')
topFour = max(array3, key=len)

withoutTopFour = withoutTopThree.replace(topFour, '')
array4 = withoutTopFour.split(' ')
topFive = max(array4, key=len)

print("ТОП 5 НАЙДОВШИХ СЛІВ: ")
print("1.", topOne), print("2.", topTwo), print("3.", topThree), print("4.", topFour), print("5.", topFive)

print("\n НАЙЧАСТІШЕ ПОВТОРЮВАЛЬНЕ СЛОВО: ")
_res = {(x, array.count(x)) for x in array}
_array = []
for word, kol in _res:
    _array.append((kol, word))
    _array.sort(reverse=True)
for freq, word in _array[0:5]:
    if len(word) > 3:
        print('{0:10} {1}'.format(word, freq), "\n")

sorting = sorted(array)
print("ВІДСОРТОВАНО ПО АЛФАВІТУ: \n", sorting)
