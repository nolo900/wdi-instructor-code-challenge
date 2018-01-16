require 'sinatra'

get '/' do # add 'do' here
  # File.read('views/index.erb')
  erb :index
end

# get '/search' do
#   base_url = 'http://www.omdbapi.com/?apikey=79b5fd91&'
#   title = 's=' + params[:movie_title]
#   search_url = base_url + title
#   api_results = RestClient.get search_url
#   @view_results = JSON.parse(api_results)
#   erb :index
#   # File.read('views/index.erb')
# end

get '/favorites' do #added slash in front of favorites
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

post '/favorites' do #changed to POST
  file = JSON.parse(File.read('data.json'))
  unless params[:name] && params[:oid]
    return 'Invalid Request'
  end # add 'end' here
  movie = { name: params[:name], oid: params[:oid] }
  file << movie
  File.write('data.json',JSON.pretty_generate(file))
  movie.to_json
end
