class FrontendController < ApplicationController

  def index
  end

  def poll
    votes = Vote.order("created_at DESC")
    cat_count = Vote.where(animal: 'cat').count
    dog_count = Vote.where(animal: 'dog').count
    render :json => {
      all: Vote.all,
      cats: cat_count,
      dogs: dog_count,
    }
  end

  def vote
    animal = params[:animal]
    if animal
      Vote.create(animal: params[:animal])
    end
    render :json => {}
  end

end
