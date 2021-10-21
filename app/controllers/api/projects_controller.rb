class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id

    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    @tasks = @project.tasks
  end

  def edit
    @project = current_user.projects.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    render json: @project
  end

  def search
    if params[:query]
      @projects = Project.all.where("LOWER(title) ~ LOWER(?)", params[:query])
    else
      @projects = Project.none
    end

    render :search
  end

  private

  def project_params
    params
      .require(:project)
      .permit(:title, :seconds, :author_id, :created_at)
  end
end
