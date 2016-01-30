def ssl?
     uri = URI.parse(@config[:server])
     uri.scheme == "https"
end

def publish(data)
 #      Net::HTTP.post_form(URI.parse(config[:server]), data)
      url  = URI.parse(@config[:server])
       req  = Net::HTTP::Post.new(url.path)
       req.set_form_data(data)
       http = Net::HTTP.new(url.host, url.port)
       http.use_ssl = ssl?
       res  = http.start { |http| http.request(req) }
      end