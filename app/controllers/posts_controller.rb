class PostsController < ApplicationController

	# method to permit the :link and :title attributes in PostsController
	def post_params
		params.require(:post).permit(:link, :title)
	end

	def index
		respond_with Post.all
	end

	def create
		respond_with Post.create(post_params)
	end

	def show
		respond_with Post.find(params[:id])
	end

	def upvoate
		post = Post.find(params[:id])
		post.increment!(:upvotes)

		respond_with post
	end

	private
	def post_params
		params.require(:post).permit(:link, :title)
	end
end
