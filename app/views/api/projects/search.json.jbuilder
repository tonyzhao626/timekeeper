json.array! @projects do |project|
  json.extract! project, :id, :title
end
