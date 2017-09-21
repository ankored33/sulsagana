require 'sinatra'
require "sinatra/reloader" if development?

get '/' do
    erb :main
end

get '/about' do
    erb :about
end

#起動オプション
#ruby main.rb -p $PORT -o $IP