import re, random
import matplotlib.pyplot as plt
from wordcloud import WordCloud

# 1. 构建类别字典
categories = {
    "Network fraud phrases": ['josemonkeyorg', 'cnncom', 'http', 'click', 'remove', 'choose', 'site'],
    "Financial fraud phrases": ['investment', 'account', 'money', 'payment', 'statements', 'transfer', 'approved', 'bank'],
    "Medical fraud phrases": ['viagra', 'pills', 'lose', 'aug', 'health'],
    "Communication fraud phrases": ['guaranteed', 'replica', 'custom', 'huge'],
    "Emotional fraud phrases": ['dear', 'love', 'professional', 'sex', 'life'],
    "Advertising fraud phrases": ['watches', 'quality', 'replica', 'rolex', 'cable']
}

# 自定义颜色函数，使每个词有随机颜色
def random_color_func(word, font_size, position, orientation, random_state=None, **kwargs):
    return f"hsl({random.randint(0, 360)}, 100%, 20%)"

# 2. 创建生成词云的函数
def generate_wordcloud_1(category_name):
    # 获取类别中的词列表
    words = categories.get(category_name, [])

    # 将词列表连接成一个字符串
    text = " ".join(words)

    # 生成词云
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(text)

    # 显示词云
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud.recolor(color_func=random_color_func), interpolation='bilinear')
    plt.axis('off')
    plt.title(category_name, fontsize=20)  # 添加类别标题
    plt.show()

# 2. 创建生成词云的函数
def generate_wordcloud_2(words):
    # 将词列表连接成一个字符串
    text = " ".join(words)
    # 生成词云
    wordcloud = WordCloud(width=400, height=200, background_color='white').generate(text)
    return wordcloud

# 3. 让用户选择类别
def show_category_wordcloud():
    while True:
        print("Select fraud category:")
        for i, category in enumerate(categories.keys()):
            print(f"{i + 1}. {category}")

        try:
            choice = int(input("\nPlease enter a category number to generate a word cloud (or enter 0 to exit): "))
            if choice == 0:
                print("Exited the program")
                break
            selected_category = list(categories.keys())[choice - 1]
            # 生成对应类别的词云
            generate_wordcloud_1(selected_category)
        except (ValueError, IndexError):
            print("Invalid input, please enter a valid category number")

show_category_wordcloud()

# # 3. 在同一个画布上展示多个词云图
# def show_all_wordclouds():
#     num_categories = len(categories)
#     fig, axs = plt.subplots(2, 3, figsize=(18, 10))  # 创建 2x3 的子图布局
#
#     # 定义标题的字体和样式
#     title_font = {
#         'fontsize': 26,
#         'fontweight': 'bold',
#         'fontname': 'Arial',  # 你可以换成其他字体，如 'Arial', 'Times New Roman'
#         'color': 'black'
#     }
#
#     for ax, (category_name, words) in zip(axs.ravel(), categories.items()):
#         # 生成词云
#         wordcloud = generate_wordcloud_2(words)
#
#         # 在每个子图上绘制词云
#         ax.imshow(wordcloud.recolor(color_func=random_color_func), interpolation='bilinear')
#         ax.axis('off')  # 关闭坐标轴
#         ax.set_title(category_name, fontdict=title_font, pad=35)  # 设置标题为类别名称
#
#     plt.tight_layout(pad=4)  # 自动调整子图间距
#     plt.show()


# 运行代码以在一个画布上展示所有类别的词云
# show_all_wordclouds()

