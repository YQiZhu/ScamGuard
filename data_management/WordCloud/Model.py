import pandas as pd
import numpy as np
import re
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report


# 清理函数，用于清除不需要的特殊符号和分隔符
def clean_text(text):
    # 去掉连字符、下划线等特殊符号，替换为单个空格
    text = re.sub(r'[_\-\s]{2,}', ' ', text)  # 清除多个下划线、连字符或空格
    # 可以根据需要添加其他清理规则，例如去掉URL、数字等
    text = re.sub(r'\d+', '', text)  # 去掉数字
    return text.strip()

scam_df = pd.read_csv('phishing_email.csv')
# 在进行TF-IDF之前，清理所有文本
scam_df['text_combined_cleaned'] = scam_df['text_combined'].apply(clean_text)

# Step 1: 数据预处理
X = scam_df['text_combined_cleaned'].fillna('')  # 处理缺失文本数据
y = scam_df['label']  # 标签（0 或 1）

# Step 2: 将数据集分为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 3: 使用TF-IDF将文本转换为数值特征
tfidf_vectorizer = TfidfVectorizer(max_features=1000, stop_words='english')
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_test_tfidf = tfidf_vectorizer.transform(X_test)

# Step 4: 训练逻辑回归分类模型
model = LogisticRegression(max_iter=1000, random_state=42)
model.fit(X_train_tfidf, y_train)

# # Step 4: 训练随机森林分类模型
# model = RandomForestClassifier(n_estimators=100, random_state=42)
# model.fit(X_train_tfidf, y_train)

# Step 5: 评估模型
y_pred = model.predict(X_test_tfidf)
print(classification_report(y_test, y_pred))


def extract_important_keywords(model, tfidf_vectorizer, top_n):
    """
    提取最重要的关键词及其重要性，根据模型的类型自动识别和输出。

    参数:
    - model: 训练后的模型 (可以是Logistic Regression, Random Forest等)
    - tfidf_vectorizer: 已训练的TF-IDF向量化器，用于提取关键词
    - top_n: 输出前n个最重要的关键词，默认为 30
    """

    # 检查模型类型是否为线性模型 (如Logistic Regression)
    if hasattr(model, 'coef_'):
        coefficients = model.coef_.flatten()
        # 只选择对正类（label=1）有贡献的正系数
        positive_indices = np.where(coefficients > 0)[0]
        # 对正系数进行降序排序
        sorted_positive_indices = positive_indices[np.argsort(coefficients[positive_indices])[::-1][:top_n]]
        important_keywords = np.array(tfidf_vectorizer.get_feature_names_out())[sorted_positive_indices]

        # 输出重要关键词及其系数
        print("Top 40 Important Keywords and their Coefficients:")
        for keyword, coef in zip(important_keywords, coefficients[sorted_positive_indices]):
            print(f"{keyword}: {coef}")

        # 返回存储的关键词列表
        return important_keywords.tolist()

    # 检查模型类型是否为基于树的模型 (如Random Forest)
    elif hasattr(model, 'feature_importances_'):
        feature_importances = model.feature_importances_
        indices = np.argsort(feature_importances)[::-1][:top_n]
        important_keywords = np.array(tfidf_vectorizer.get_feature_names_out())[indices]

        # 输出重要关键词及其重要性
        print("Top 40 Important Keywords and their Importance:")
        for keyword, importance in zip(important_keywords, feature_importances[indices]):
            print(f"{keyword}: {importance}")

        # 返回存储的关键词列表
        return important_keywords.tolist()

    # 如果模型类型不被支持
    else:
        print("Model type not supported for keyword extraction.")
        return []


# 调用函数，示例
important_keywords_list = extract_important_keywords(model, tfidf_vectorizer, top_n=40)
print("Keywords stored in list:", important_keywords_list)