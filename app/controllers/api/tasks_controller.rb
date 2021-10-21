class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
  end

  def show
    @task = Task.includes(:tags).find(params[:id])
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id

    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    render json: @task
  end

  private

  def task_params
    params
      .require(:task)
      .permit(:title, :user_id, :seconds, :project_id, tag_names: [])
  end
end
