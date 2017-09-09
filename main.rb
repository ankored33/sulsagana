require 'sinatra'
require "sinatra/reloader" if development?

get '/' do
    erb :main
end


#起動オプション
#ruby main.rb -p $PORT -o $IP