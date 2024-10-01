import nltk
import numpy as np
from Model import important_keywords_list
from nltk.corpus import wordnet as wn
from sklearn.cluster import AgglomerativeClustering

# 下载WordNet数据
# nltk.download('wordnet')
# nltk.download('omw-1.4')

# Step 1: 获取每个关键词的第一个词义的词义向量
def get_wordnet_vector(word):
    synsets = wn.synsets(word)
    if synsets:
        return synsets[0]
    return None

# 提取每个词的第一个词义
word_vectors = [get_wordnet_vector(word) for word in important_keywords_list]

# Step 2: 计算词义之间的相似度（如果有词义）
def word_similarity(syn1, syn2):
    if syn1 and syn2:
        return syn1.wup_similarity(syn2) or 0
    return 0

# 构建相似度矩阵
similarity_matrix = np.zeros((len(important_keywords_list), len(important_keywords_list)))

for i, syn1 in enumerate(word_vectors):
    for j, syn2 in enumerate(word_vectors):
        similarity_matrix[i, j] = word_similarity(syn1, syn2)

# Step 3: 使用层次聚类（Hierarchical Clustering）对关键词进行分组
n_clusters = len(important_keywords_list) // 5  # 根据词数选择合适的簇数
clustering = AgglomerativeClustering(n_clusters=n_clusters, metric='precomputed', linkage='average')
labels = clustering.fit_predict(1 - similarity_matrix)

# Step 4: 按照标签输出分组结果
grouped_keywords = {i: [] for i in range(n_clusters)}
for keyword, label in zip(important_keywords_list, labels):
    grouped_keywords[label].append(keyword)

# 输出每组关键词
for group, keywords in grouped_keywords.items():
    print(f"Group {group + 1}: {keywords}")
