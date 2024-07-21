FROM node:22-slim

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

WORKDIR /workspace

RUN groupmod -g 1234 node \
    && usermod -u 1234 -g 1234 node \
    && groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && mkdir node_modules \
    && chown $USERNAME:$USERNAME node_modules \
    && apt-get clean

RUN apt-get update \
    && apt-get install -y \
    bash \
    curl \
    git \
    openssh-client \
    zip \
    locales \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* 

RUN npm i -g bun
RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

ENV LANG="ja_JP.UTF-8" \
    LANGUAGE="ja_JP:ja" \
    LC_ALL="ja_JP.UTF-8" \
    TZ=Asia/Tokyo
