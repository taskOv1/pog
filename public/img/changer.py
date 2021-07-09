import os

os.chdir('./screenGallery')
print(os.listdir())

counter = 1
def main():
    for picture in os.listdir():
        os.rename(picture, 'gallery' + counter + '.png')
        counter = counter + 1

if __name__ == ""__main__:
    main()
