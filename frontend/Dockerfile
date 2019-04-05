FROM ruby:2.5.1-alpine

ENV PATH /root/.yarn/bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh build-base nodejs tzdata

RUN apk update \
  && apk add curl bash binutils tar gnupg postgresql-client postgresql-dev \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && touch ~/.bashrc \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && apk del curl tar binutils

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands
WORKDIR /usr/src/app

# Copy dependencies for Node.js and instance the packages.
# Again, being separate means this will cache.
COPY package.json yarn.lock ./
RUN yarn install
# RUN npm rebuild node-sass --force

# Copy the Gemfile as well as the Gemfile.lock and install
# the RubyGems. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install -j "$(getconf _NPROCESSORS_ONLN)" --retry 5

ENV RAILS_ENV development 
ENV RACK_ENV development
ENV RAILS_LOG_TO_STDOUT true
# ENV RAILS_ENV production 
# ENV RACK_ENV production
ENV RAILS_ROOT /usr/src/app

COPY . ./

EXPOSE 3000

CMD bundle exec puma -C config/puma.rb